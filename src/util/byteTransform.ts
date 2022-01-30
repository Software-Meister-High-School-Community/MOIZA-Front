export const byteTransform = (byte: number | undefined) => {
  const sizeKind = ["bytes", "KB", "MB", "GB", "TB", "PB"];

  let size: number | string = Math.floor(
    Math.log(byte as number) / Math.log(1024)
  );

  return (
    ((byte as number) / Math.pow(1024, Math.floor(size))).toFixed(1) +
    sizeKind[size]
  );
};
