export const uuidv4 = (): string => {
  const a = 15;
  const b = 4;
  const radix = 16;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: any) =>
    // eslint-disable-next-line no-mixed-operators
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & a >> c / b).toString(radix)
  );
};
