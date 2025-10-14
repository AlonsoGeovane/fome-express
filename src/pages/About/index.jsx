import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export const AboutPage = () => {
    return (
        <main className="min-h-dvh bg-gray-900 text-center py-10 px-4 text-white">
            <Header />

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto justify-center">
                <div className="md:col-span-3">
                    <h2 className="text-2xl font-semibold mb-4">Sobre o Fome Express</h2>
                    <p className="text-lg leading-relaxed">
                        Fome Express é uma plataforma online que funciona como um cardápio digital de restaurantes. 
                        O site permite que os usuários sejam redirecionados para a rede social dos estabelecimentos 
                        de forma rápida e prática, direto do navegador. Com uma interface intuitiva e acessível, o Fome Express 
                        facilita a escolha de estabelecimentos, eliminando a dúvida de onde ir. Ideal para quem quer 
                        explorar opções gastronômicas locais ou decidir o que pedir com facilidade.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
};
