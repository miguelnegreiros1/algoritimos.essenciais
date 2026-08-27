function ehPrimo(num) {
   if (num <= 1) {
   return false
   }
   if (num === 2) {
    return true
   }
   if (num % 2 === 0) {
    return false
   }

   const boundary = Math.sqrt(num); 
   for (i = 3; i <= boundary; i++) {
    if (num % i === 0) {
        return false
    }
    return true
   }
}


