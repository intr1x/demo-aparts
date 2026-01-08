'use client'

import { useQueryState, parseAsString, parseAsInteger } from 'nuqs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'

interface CatalogFiltersProps {
  minFloor: number
  maxFloor: number
  foundCount: number
}

export function CatalogFilters({ minFloor, maxFloor, foundCount }: CatalogFiltersProps) {
  const [tower, setTower] = useQueryState('tower', parseAsString.withDefault('all'))
  const [rooms, setRooms] = useQueryState('rooms', parseAsString.withDefault('all'))
  const [guests, setGuests] = useQueryState('guests', parseAsInteger.withDefault(1))
  const [floorMin, setFloorMin] = useQueryState('floorMin', parseAsInteger.withDefault(minFloor))
  const [floorMax, setFloorMax] = useQueryState('floorMax', parseAsInteger.withDefault(maxFloor))

  const handleFloorChange = (values: number[]) => {
    setFloorMin(values[0])
    setFloorMax(values[1])
  }

  return (
    <div className="space-y-4 lg:space-y-0">
      {/* Мобильная и планшетная версия - вертикальная раскладка */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-end gap-4">
        <div className="w-full lg:w-[180px]">
          <label className="text-xs font-medium mb-1.5 block">Башня</label>
          <Select value={tower} onValueChange={setTower}>
            <SelectTrigger className="h-10">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все башни</SelectItem>
              <SelectItem value="oko">ОКО</SelectItem>
              <SelectItem value="neva-t1">NEVA Tower T1</SelectItem>
              <SelectItem value="neva-t2">NEVA Tower T2</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full lg:w-[180px]">
          <label className="text-xs font-medium mb-1.5 block">Комнаты</label>
          <Select value={rooms} onValueChange={setRooms}>
            <SelectTrigger className="h-10">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Любое количество</SelectItem>
              <SelectItem value="1">1 комната</SelectItem>
              <SelectItem value="2">2 комнаты</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full sm:w-auto lg:w-[140px]">
          <label className="text-xs font-medium mb-1.5 block">Гостей</label>
          <div className="flex items-center gap-2 h-10">
            <Button
              variant="outline"
              size="sm"
              className="h-10 w-10 p-0"
              onClick={() => setGuests(Math.max(1, guests - 1))}
            >
              −
            </Button>
            <span className="w-10 text-center font-medium text-sm">{guests}</span>
            <Button
              variant="outline"
              size="sm"
              className="h-10 w-10 p-0"
              onClick={() => setGuests(guests + 1)}
            >
              +
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-[250px]">
          <label className="text-xs font-medium mb-1.5 block">
            Этаж: {floorMin} - {floorMax}
          </label>
          <div className="h-10 flex items-center">
            <Slider
              min={minFloor}
              max={maxFloor}
              step={1}
              value={[floorMin, floorMax]}
              onValueChange={handleFloorChange}
              className="w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Счетчик найденных объектов */}
      <div className="text-sm text-gray-600 text-center lg:text-left">
        Найдено: <span className="font-semibold text-gray-900">{foundCount}</span> {foundCount === 1 ? 'объект' : foundCount > 1 && foundCount < 5 ? 'объекта' : 'объектов'}
      </div>
    </div>
  )
}
