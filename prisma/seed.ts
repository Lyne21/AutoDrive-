import { PrismaClient } from '@prisma/client'
import { fakerFR as faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
    console.log("🌱 Nettoyage de la base de données actuelle...")
    // Supprime les anciennes voitures pour éviter les doublons
    await prisma.voiture.deleteMany()

    console.log("🚗 Génération de 20 voitures de test avec Faker...")

    const marques = ["Toyota", "Tesla", "Mercedes", "BMW", "Audi", "Peugeot", "Hyundai", "Porsche"]
    

    for (let i = 0; i < 20; i++) {
        const marqueChoisie = faker.helpers.arrayElement(marques)
        // Génère un nom de modèle comme "Toyota Executive" ou "BMW Hybrid"
        const modeleChoisi = faker.helpers.arrayElement(["Classique", "Sport", "Executive", "Comfort", "Édition Limitée"])

        await prisma.voiture.create({
            data: {
                marque: `${marqueChoisie} ${modeleChoisi}`,
                // Génère un prix réaliste entre 25 000 et 150 000 FCFA
                prix_location: faker.number.int({ min: 25000, max: 150000 }),
                // 80% de chances que la voiture soit disponible
                disponible: faker.datatype.boolean({ probability: 0.8 }),
                // NOTE: Si tu as ajouté le champ type ou image plus tard, tu pourras les décommenter ici :
                // type: faker.helpers.arrayElement(types),
                // image: `/images/placeholder-voiture.png`
            }
        })
    }

    console.log("✅ Base de données remplie avec succès !");
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })