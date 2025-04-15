import Autoplay from 'embla-carousel-autoplay'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { useMediaQuery } from '@uidotdev/usehooks'
import { menuData } from '@/data/menuData'
import { useNavigate } from 'react-router-dom'
import codeSnap from '@/assets/code-snap.png'

const foodItems = menuData
  .filter((item) => item.name === 'Pizza' || item.name === 'Burgers')
  .flatMap((category) => category.products)

const Home = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 640px)')
  const navigate = useNavigate()

  const navigateToMenu = () => {
    navigate('/menu')
  }

  return (
    <div className="h-dvh flex flex-col justify-center gap-y-4 gap-x-3 sm:gap-x-0 sm:gap-y-0 sm:flex-row sm:px-4">
      <div className="flex flex-col items-center px-8 space-y-3 sm:block sm:self-center">
        <h1 className="text-center scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight font-mono sm:text-start lg:text-5xl">
          stacked || sliced
        </h1>

        <p className="text-center text-md text-muted-foreground sm:text-justify sm:text-xl">
          Can't decide between the usual suspects? Check out our menu and
          satisfy your craving. Two classics, both top quality, under the same
          roof!
        </p>
        <Button variant="default" size="lg" onClick={navigateToMenu}>
          START ORDER
        </Button>
        <img
          src={codeSnap}
          alt="code-snippet"
          className="rounded-md w-96 hidden sm:block"
        />
      </div>
      <div className="sm:flex sm:my-auto">
        <Carousel
          opts={{
            align: 'center',
            loop: true
          }}
          orientation={isSmallDevice ? 'horizontal' : 'vertical'}
          plugins={[Autoplay({ delay: 3500, stopOnInteraction: false })]}
        >
          <CarouselContent className="-mt-1 h-[350px] sm:h-[75dvh]">
            {foodItems.map((foodItem, index) => (
              <CarouselItem key={index} className="pt-1">
                <div className="h-full ">
                  <img
                    src={foodItem.imagePath}
                    alt={foodItem.name}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.onerror = null
                      target.style.objectFit = 'scale-down'
                      target.src =
                        'https://placehold.co/600x400/cccccc/ffffff?text=Image+Not+Found'
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {!isSmallDevice && (
            <>
              <CarouselPrevious />
              <CarouselNext />
            </>
          )}
        </Carousel>
      </div>
    </div>
  )
}

export default Home
