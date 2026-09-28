interface PageMetadata {
  totalPages: number;
  startItem: number;
  endItem: number;
  hasPrev: boolean;
  hasNext: boolean;
}

function getPageMetadata(
  totalItems: number,
  pageSize: number,
  currentPage: number
): PageMetadata {
  if (totalItems === 0) {
    return {
      totalPages: 0,
      startItem: 0,
      endItem: 0,
      hasPrev: false,
      hasNext: false,
    };
  }

  const totalPages = Math.ceil(totalItems / pageSize);

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return {
    totalPages,
    startItem,
    endItem,
    hasPrev,
    hasNext,
  };
}
