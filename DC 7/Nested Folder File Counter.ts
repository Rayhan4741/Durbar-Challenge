interface File { name: string; type: 'file'; }
interface Folder { name: string; type: 'folder'; children: (File | Folder)[]; }
type FileSystemItem = File | Folder;

function countFilesInFolder(structure: FileSystemItem[]): number {
  let count = 0;

  for (const item of structure) {
    if (item.type === 'file') {
      count += 1;
    } else if (item.type === 'folder' && item.children) {
      count += countFilesInFolder(item.children);
    }
  }

  return count;
}
