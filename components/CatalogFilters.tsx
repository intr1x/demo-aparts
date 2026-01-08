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
    <div className="flex items-center gap-4 justify-between">
      <div className="flex items-center gap-4">
        <div className="w-[180px]">
          <label className="text-xs font-medium mb-1.5 block">Башня</label>
          <Select value={tower} onValueChange={setTower}>
            <SelectTrigger className="h-9">
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

        <div className="w-[180px]">
          <label className="text-xs font-medium mb-1.5 block">Комнаты</label>
          <Select value={rooms} onValueChange={setRooms}>
            <SelectTrigger className="h-9">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Любое количество</SelectItem>
              <SelectItem value="1">1 комната</SelectItem>
              <SelectItem value="2">2 комнаты</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="w-[140px]">
          <label className="text-xs font-medium mb-1.5 block">Гостей</label>
          <div className="flex items-center gap-2 h-9">
            <Button
              variant="outline"
              size="sm"
              className="h-9 w-9 p-0"
              onClick={() => setGuests(Math.max(1, guests - 1))}
            >
              −
            </Button>
            <span className="w-8 text-center font-medium text-sm">{guests}</span>
            <Button
              variant="outline"
              size="sm"
              className="h-9 w-9 p-0"
              onClick={() => setGuests(guests + 1)}
            >
              +
            </Button>
          </div>
        </div>

        <div className="w-[250px]">
          <label className="text-xs font-medium mb-1.5 block">
            Этаж: {floorMin} - {floorMax}
          </label>
          <div className="h-9 flex items-center">
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
      
      <div className="text-sm text-gray-600 whitespace-nowrap">
        Найдено: <span className="font-semibold text-gray-900">{foundCount}</span> {foundCount === 1 ? 'объект' : foundCount > 1 && foundCount < 5 ? 'объекта' : 'объектов'}
      </div>
    </div>
  )
}
