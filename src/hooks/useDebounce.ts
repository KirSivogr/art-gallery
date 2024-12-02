export function useDebounce(this: any, func: (query: string) => void, delay: number) {
   // eslint-disable-next-line no-undef
   let timeoutId: NodeJS.Timeout;

   return function (this: any, args: string) {
      const context = this;

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
         func.call(context, args);
      }, delay);
   };
}
