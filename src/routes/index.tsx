import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/Hero'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className='relative'>
          <Hero />
          <div className="absolute h-full inset-x-0 -bottom-px bg-linear-to-t/oklch from-base-bg via-base-bg/80 via-30% to-base-bg/0" />
      </div>
      <div className='bg-base-bg text-base-fg flex items-center justify-center'>
        <div className='max-w-2/3 p-16 my-32'>
          <h1 className=' text-2xl p-4'>Sobre nós</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel luctus nunc. 
            Aliquam erat volutpat. Pellentesque tempor viverra arcu vel mattis. Morbi at interdum metus. 
            Curabitur vitae justo nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam 
            vitae lorem et lectus vestibulum sagittis. Maecenas ut libero justo. Ut fringilla turpis massa, eu 
            efficitur lorem tincidunt vel. In est libero, pellentesque eget interdum ac, aliquet nec ipsum. Nullam 
            eu arcu ipsum. Donec aliquam felis sit amet enim ullamcorper egestas. Nunc id justo in sem lacinia interdum. 
            Curabitur quis est non massa suscipit auctor a maximus ante. Nunc non rhoncus nulla. Proin sollicitudin mollis iaculis. 
          </p>
          
          <p>
            Curabitur iaculis lorem vitae sapien vehicula auctor. Vestibulum aliquam tincidunt mattis. Nam et libero vel orci eleifend 
            hendrerit sit amet at dui. Nunc vitae blandit eros. Ut et gravida nibh. Nulla ullamcorper nisi tortor, ut finibus tellus 
            ultricies ut. In sed faucibus orci. Praesent malesuada eleifend felis at dapibus. 
          </p>

        </div>
      </div>
    </>
  )
}
