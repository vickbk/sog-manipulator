export const readJsonFile = async <T = any>(file: File): Promise<T> => {
  const reader = new FileReader();
  const content = await new Promise((resolve, reject) => {
    reader.onload = () => {
      try {
        const text = reader.result as string;
        resolve(JSON.parse(text));
      } catch (err) {
        reject(err);
      }
    };
    reader.onerror = () => reject(reader.error ?? new Error("File read error"));
    reader.readAsText(file);
  });
  return content as T;
};
