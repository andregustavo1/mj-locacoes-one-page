
import { Separator } from "@/components/ui/separator";

const ValuesSection = () => {
  return (
    <section id="valores" className="py-24 bg-mj-wine text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossos Valores</h2>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg mb-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-6">
              "Confia ao Senhor as tuas obras, e teus pensamentos serão estabelecidos."
            </p>
            <p className="text-xl md:text-2xl font-medium text-mj-yellow">Provérbios 16:3</p>
          </div>
          
          <Separator className="my-8 bg-white/30" />
          
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Guiados por valores cristãos, buscamos excelência em tudo o que fazemos, 
            sempre confiando que nosso trabalho é uma expressão do nosso compromisso 
            com você e com os princípios que acreditamos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
