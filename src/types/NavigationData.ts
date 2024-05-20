export interface NavigationData {
  idMap: { [key: string]: NavigationObject }
  structure: StructureData[]
  seoRouteMap: SeoRouteMap
}

export interface NavigationObject {
  caasDocumentId: string
  contentReference: string
  id: string
  label: string
  parentIds: string[]
  seoRoute: string
}

export interface StructureData {
  children?: StructureData[]
  id: string
}

export interface SeoRouteMap {
  [key: string]: string
}
