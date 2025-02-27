export function filterUndefined<T>(
  obj: T,
): Partial<T> {
  const filteredObj: Partial<T> = {};

  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      if (typeof value === "object" && !Array.isArray(value)) {
        const nestedObj = filterUndefined(value as Record<string, unknown>);
        if (Object.keys(nestedObj).length > 0) {
          filteredObj[key as keyof T] = nestedObj as T[keyof T];
        }
      } else if (Array.isArray(value)) {
        const filteredArray = value
          .map((item) =>
            typeof item === "object" && item !== null
              ? filterUndefined(item as Record<string, unknown>)
              : item,
          )
          .filter((item) => item !== undefined && item !== null && item !== "");
        if (filteredArray.length > 0) {
          filteredObj[key as keyof T] = filteredArray as T[keyof T];
        }
      } else {
        filteredObj[key as keyof T] = value as T[keyof T];
      }
    }
  });

  return filteredObj;
}
