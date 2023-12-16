import { ref } from 'vue'
import { filterOptions } from 'src/data/filter'
import type { IFilterOption } from 'src/components/models'

export function useFilterOptions() {
  const options = ref<IFilterOption[]>(filterOptions)

  return options
}
