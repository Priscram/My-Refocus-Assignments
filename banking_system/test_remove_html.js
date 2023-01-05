 // (A) STRIP TAGS FUNCTION

 function stripTags(original) {
     return original.replace(/(<([^>]+)>)/gi, "");

 }

 // (B) ORIGINAL STRING
 var str = "<p>This is a <strong>string</strong> with some <u>HTML</u> in it.</p>";

 // (C) "CLEANED" STRING
 var cleaned = stripTags(str);
 console.log(cleaned);