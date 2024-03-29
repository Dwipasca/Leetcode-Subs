/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if (s.length !== t.length) return false

    const objS = new Map()
    const objT = new Map ()
   
    for (let i = 0; i < s.length; i ++) {
        let word = s[i]
        let word2 = t[i]

        objS.set(word, (objS.get(word) || 0) + 1)
        objT.set(word2, (objT.get(word2) || 0) + 1)
        
    }

   for (const key of objS.keys()) {
       if (objS.get(key) !== objT.get(key)) return false
   }


    return true

};