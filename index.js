// app.js dosyasından `getData` fonksiyonunu içe aktarır.
import { getData } from "./app.js";

// `getData` fonksiyonunu çağırarak 1 numaralı kullanıcının bilgilerini ve postlarını almayı dener.
// Başarılı bir şekilde verileri aldığında, kullanıcı ve post bilgilerini konsola yazdırır.
getData(1)
  .then(({ user, post }) => console.log(user, post))
  // Eğer `getData` fonksiyonu bir hata ile sonuçlanırsa, bu hatayı konsola yazdırır.
  .catch((e) => console.log(e));
