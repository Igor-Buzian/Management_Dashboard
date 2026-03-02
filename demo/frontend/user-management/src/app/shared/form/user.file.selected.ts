export function readImageFile(event: Event): Promise<string | null> {
  return new Promise((resolve) => {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      resolve(null);
      return;
    }

    const file = input.files[0];

    if (!file.type.startsWith('image/')) {
      resolve(null);
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result as string);
    };

    reader.onerror = () => resolve(null);

    reader.readAsDataURL(file);
  });
}
