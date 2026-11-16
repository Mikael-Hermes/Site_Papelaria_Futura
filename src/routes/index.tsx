import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'
import SobreNos from '../components/SobreNosTexto'
import OpenCloseSection from '../components/OpenCloseSection'
import CardLocalizacao from '../components/CardLocalizacao'


export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className='relative'>
          <Hero />
          <div className="absolute h-full inset-x-0 -bottom-px bg-linear-to-t/oklch from-base-dark-bg via-base-bg/80 via-30% to-base-dark-bg/0" />
      </div>
      <div className='bg-base-dark-bg text-base-fg flex items-center justify-center'>
        <div className='max-w-2/3 p-16 my-32'>
          <h1 className=' text-2xl p-4'>Sobre nós</h1>
          <SobreNos />
        </div>
      </div>

      <section>
        <OpenCloseSection extraClass='h-96' title='Produtos' link='/produtos' image='src/assets/LOGO FUTURA.png'></OpenCloseSection>
        <OpenCloseSection extraClass='h-96' title='Serviços' link='/servicos' image='src/assets/LOGO FUTURA.png'></OpenCloseSection>
        <OpenCloseSection extraClass='h-96' title='Contato' link='/contatos' image='src/assets/LOGO FUTURA.png'></OpenCloseSection>
      </section>
      
      <div className='bg-base-dark-bg p-32 flex justify-center'>
        <CardLocalizacao />
      </div>
      
    </>
  )
}
