import axios from "axios";

// Belirtilen indeks numarasına sahip bir kullanıcının bilgilerini ve postlarını getiren fonksiyon.
async function getData(index) {
  // Kullanıcının bilgilerini almak için API'dan istek yapılır.
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users" + index
  );

  // Kullanıcının postlarını almak için API'dan istek yapılır.
  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + index
  );

  // Kullanıcının bilgileri ve postları bir nesne içerisinde döndürülür.
  return { user, post };
}

// `getData` fonksiyonunu dışa aktarır, böylece diğer modüllerden erişilebilir hale gelir.
export { getData };
