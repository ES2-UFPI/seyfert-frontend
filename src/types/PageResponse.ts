export interface PageResponse<Content> {
    content: Content
    totalPages: number
    totalElements: number
    numberOfElements: number
}
