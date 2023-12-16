import type { IPipeProps } from 'src/components/models'
import { filterOptions } from 'src/data/filter'

export const pipeTypes = [
  {
    date: Date.now(),
    standartId: '123',
    name: 'Трубы',
    pipesCount: 10,
    diameter: 1
  },
  {
    date: Date.now(),
    standartId: '1234',
    name: 'Трубы',
    pipesCount: 10,
    diameter: 2
  },
  {
    date: Date.now(),
    standartId: '223',
    name: 'Трубы',
    pipesCount: 10,
    diameter: 3
  },
  {
    date: Date.now(),
    standartId: '323',
    name: 'Трубы',
    pipesCount: 10,
    diameter: 4
  },
  {
    date: Date.now(),
    standartId: '423',
    name: 'Трубы',
    pipesCount: 10,
    diameter: 5
  },
  {
    date: Date.now(),
    standartId: '523',
    name: 'Трубы',
    pipesCount: 10,
    diameter: 6
  },
  {
    date: Date.now(),
    standartId: '623',
    name: 'Трубы',
    pipesCount: 10,
    diameter: 7
  },
  {
    date: Date.now(),
    standartId: '723',
    name: 'Трубы',
    pipesCount: 10,
    diameter: 8
  }
]

export const fakePipes: IPipeProps[] = [
  {
    filename: '1.jpg',
    date: Date.now(),
    defects: filterOptions.filter((opt) => opt.id > 5)
  },
  {
    filename: '2.jpg',
    date: Date.now(),
    defects: filterOptions.filter((opt) => opt.id <= 5)
  },
  {
    filename: '3.jpg',
    date: Date.now(),
    defects: filterOptions.filter((opt) => opt.id == 2)
  },
  {
    filename: '4.jpg',
    date: Date.now(),
    defects: filterOptions.filter((opt) => opt.id == 3)
  },
  {
    filename: '5.jpg',
    date: Date.now(),
    defects: filterOptions.filter((opt) => opt.id == 4)
  },
  {
    filename: '6.jpg',
    date: Date.now(),
    defects: filterOptions.filter((opt) => opt.id == 5)
  },
  {
    filename: '7.jpg',
    date: Date.now(),
    defects: filterOptions.filter((opt) => opt.id == 6)
  },
  {
    filename: '8.jpg',
    date: Date.now(),
    defects: filterOptions.filter((opt) => opt.id == 7)
  },
  {
    filename: '9.jpg',
    date: Date.now(),
    defects: filterOptions.filter((opt) => opt.id == 8)
  }
]
