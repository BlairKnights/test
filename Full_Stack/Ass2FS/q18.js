const isBrowser = () => ![typeof window, typeof document].includes('undefined');

console.log("\n Is browser: "+isBrowser()+"\n"); 