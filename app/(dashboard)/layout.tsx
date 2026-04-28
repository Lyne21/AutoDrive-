import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { auth } from "@/lib/auth"
import { Header } from "@/components/layout/header"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full"> {/* Conteneur Flex horizontal */}
        <AppSidebar />
        
        {/* On crée une colonne à droite qui prend tout l'espace restant */}
        <div className="flex flex-col flex-1"> 
          <Header user={session?.user} />
          
          <main className="p-6">
            <SidebarTrigger className="mb-4" />
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}