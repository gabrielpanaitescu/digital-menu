import React from 'react'
import { MenuCategory } from '@/data/menuData'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { Input } from './ui/input'
import { useMediaQuery } from '@uidotdev/usehooks'

interface Props {
  data: MenuCategory[]
  categorySelect: string
  setCategorySelect: React.Dispatch<React.SetStateAction<string>>
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  priceSort: string
  setPriceSort: React.Dispatch<React.SetStateAction<string>>
}

const MenuBar = ({
  data,
  categorySelect,
  setCategorySelect,
  searchQuery,
  setSearchQuery,
  priceSort,
  setPriceSort
}: Props) => {
  const isXSDevice = useMediaQuery('only screen and (max-width: 335px)')
  const categoryList = data.map((category) => category.name)

  const handleSearchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value)
  }

  return (
    <div className="pt-2 sticky top-12 bg-white z-40 container mx-auto px-4 mt-24 sm:px-6">
      <div className="flex items-center gap-2">
        <h2
          className={`text-2xl font-semibold tracking-tight first:mt-0 ${
            isXSDevice && 'hidden'
          }`}
        >
          Menu
        </h2>
        <Select value={categorySelect} onValueChange={setCategorySelect}>
          <SelectTrigger className="max-w-[110px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            {categoryList.map((category, index) => (
              <SelectItem value={category} key={category + index}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="font-light">
              Sort
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Price</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={priceSort}
              onValueChange={setPriceSort}
            >
              <DropdownMenuRadioItem value="priceAsc">
                Lowest
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="priceDesc">
                Highest
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Input
          value={searchQuery}
          onChange={handleSearchQuery}
          placeholder="Search"
          className="min-w-[75px] max-w-[110px] sm:max-w-[140px]"
        />
      </div>
      <Separator />
    </div>
  )
}

export default MenuBar
