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

import codeSnap from '@/assets/code-snap.png'
import { menuData } from '@/data/menuData'

const foodItems = menuData
  .filter((item) => item.category === 'Pizza' || item.category === 'Burgers')
  .map((category) => category.products)
  .flat()

const Home = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 640px)')

  return (
    <div className="h-dvh flex flex-col justify-center gap-y-4 gap-x-3 sm:gap-x-0 sm:gap-y-0 sm:flex-row sm:px-4">
      <div className="px-8 space-y-3 sm:self-center">
        <h1 className="scroll-m-20 text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl font-mono">
          stacked || sliced
        </h1>

        <p className="text-md sm:text-xl text-muted-foreground">
          Can't decide between the usual suspects? Check out our menu and
          satisfy your craving. Two classics, both top quality, under the same
          roof!
        </p>
        {isSmallDevice ? (
          <Button variant="default" size="lg">
            START ORDER
          </Button>
        ) : (
          <Button variant="default" size="lg">
            START ORDER
          </Button>
        )}
        <img
          src={codeSnap}
          alt="code-snippet"
          className="rounded-md w-96 hidden sm:block"
        />
      </div>
      <div className=" sm:flex sm:my-auto">
        <Carousel
          opts={{
            align: 'center',
            loop: true
          }}
          orientation={isSmallDevice ? 'horizontal' : 'vertical'}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
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
