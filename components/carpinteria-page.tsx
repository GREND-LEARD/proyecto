'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Hammer, Mail, MapPin, Phone } from "lucide-react"

export function CarpinteriaPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Carpintería Artesanal</h1>
          <ul className="flex space-x-4">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#servicios" className="hover:underline">Servicios</a></li>
            <li><a href="#proyectos" className="hover:underline">Proyectos</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="inicio" className="relative h-[500px] flex items-center justify-center text-center text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{backgroundImage: "url('/placeholder.svg?height=500&width=1000')"}}
          ></div>
          <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-lg">
            <h2 className="text-4xl font-bold mb-4">Bienvenidos a Carpintería Artesanal</h2>
            <p className="mb-6">Creamos muebles únicos y personalizados para tu hogar</p>
            <Button size="lg">Solicitar Presupuesto</Button>
          </div>
        </section>

        <section id="servicios" className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Muebles a Medida', 'Restauración', 'Instalación'].map((servicio) => (
                <Card key={servicio}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Hammer className="mr-2" />
                      {servicio}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Ofrecemos servicios de {servicio.toLowerCase()} de alta calidad, adaptados a tus necesidades específicas.
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Proyectos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img 
                  key={i}
                  src={`/placeholder.svg?height=300&width=400&text=Proyecto ${i}`} 
                  alt={`Proyecto ${i}`}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contáctanos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Phone className="mr-2" /> +34 123 456 789
                    </li>
                    <li className="flex items-center">
                      <Mail className="mr-2" /> info@carpinteriaartesanal.com
                    </li>
                    <li className="flex items-center">
                      <MapPin className="mr-2" /> Calle Carpintero, 123, 28000 Madrid
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un Mensaje</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Nombre" />
                    <Input type="email" placeholder="Email" />
                    <Textarea placeholder="Mensaje" />
                    <Button type="submit">Enviar Mensaje</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground mt-auto">
        <div className="container mx-auto px-4 py-8 text-center">
          <p>&copy; 2024 Carpintería Artesanal. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}