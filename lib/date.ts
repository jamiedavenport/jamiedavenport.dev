import format from "date-fns/format";

export const prettyPostDate = (d: Date): string => {
  return format(d, "EEEE, do MMMM y");
};
