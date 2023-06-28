const students = [
    {
      name: "Hồ Đắc Thanh Chương",
      // favorite: "THPT Quốc học Huế, Thừa Thiên - Huế",
      favorite: 180,
      image: "https://znews-photo.zingcdn.me/w860/Uploaded/mdf_drkydd/2018_05_07/14_zing.jpg",
      lastUpdated: "2023-06-25"
    },
    {
      name: "Nguyễn Hoàng Cường",
      favorite: 190,
      image: "https://photo-cms-tpo.epicdn.me/w645/Uploaded/2023/pcgycivo/2018_05_08/10_TRMM.jpg.ashx?width=600",
      lastUpdated: "2023-06-20"
    },
    {
      name: "Phan Đăng Nhật Minh",
      favorite: 170,
      image: "https://photo-cms-tpo.epicdn.me/w645/Uploaded/2023/pcgycivo/2018_05_08/9_HASY.jpg.ashx?width=600",
      lastUpdated: "2023-06-21"
    },
    {
      name: "Đỗ Đức Hiếu",
      favorite: 160,
      image: "https://photo-cms-tpo.epicdn.me/w645/Uploaded/2023/pcgycivo/2018_05_08/3_MFGI.jpg",
      lastUpdated: "2023-06-22"
    },
    {
      name: "Mai Thị Minh Huyền",
      favorite: 150,
      image: "https://photo-cms-tpo.epicdn.me/w645/Uploaded/2023/pcgycivo/2018_05_08/7_QDWF.jpg.ashx?width=600",
      lastUpdated: "2023-06-19"
    },
    {
      name: "Phạm Thị Ngọc Oanh",
      favorite: 140,
      image: "https://vtv1.mediacdn.vn/2021/11/13/ngayaybaygiocua3nuquanquanduonglendinholympia-1636776138745149941223.jpg",
      lastUpdated: "2023-06-18"
    },
    {
      name: "Phạm Tường Lan Thy",
      favorite: 130,
      image: "https://photo-cms-tpo.epicdn.me/w645/Uploaded/2023/pcgycivo/2018_05_08/6_FNNJ.jpg.ashx?width=600",
      lastUpdated: "2023-06-29"
    },
    {
      name: "Huỳnh Nguyễn Hồng Chiến",
      favorite: 120,
      image: "https://photo-cms-tpo.epicdn.me/w645/Uploaded/2023/pcgycivo/2018_05_08/5_IUCB.jpg.ashx?width=600",
      lastUpdated: "2023-06-30"
    },
    {
      name: "Lê Vũ Hoàng",
      favorite: 110,
      image: "https://photo-cms-tpo.epicdn.me/w645/Uploaded/2023/pcgycivo/2018_05_08/2_UHPJ.jpg.ashx?width=600",
      lastUpdated: "2023-06-11"
    },
  
    {
      name: "Nguyễn Thành Vinh",
      favorite: 100,
      image: "https://photo-cms-tpo.epicdn.me/w645/Uploaded/2023/pcgycivo/2018_05_08/1_AOZP.jpg.ashx?width=600",
      lastUpdated: "2023-06-17"
    },
    {
      name: "Nguyễn Trọng Nhân",
      favorite: 90,
      image: "https://vtv1.mediacdn.vn/2021/11/13/03-1636777527961958447496.jpg",
      lastUpdated: "2023-07-2"
    },
    // ...
    // Các thông tin về học sinh khác
    // ...
  ];
  
  function displayFavoriteStudents() {
    const favoriteStudentsElement = document.getElementById("favoriteStudents");
    const studentListElement = document.getElementById("studentList");
    studentListElement.innerHTML = ""; // Xóa nội dung cũ
  
    // Sắp xếp các học sinh theo yêu thích và ngày cập nhật
    const sortedStudents = students.sort((a, b) => {
      if (a.favorite !== b.favorite) {
        return b.favorite - a.favorite;
      } else {
        return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      }
    });
  
    // Hiển thị 10 học sinh được yêu thích nhất
    const topStudents = sortedStudents.slice(0, 10);
    topStudents.forEach(student => {
      const studentItem = document.createElement("li");
  
      // Tạo thẻ hình ảnh và thêm vào danh sách
      const imageElement = document.createElement("img");
      imageElement.src = student.image;
      imageElement.alt = student.name;
      studentItem.appendChild(imageElement);
  
      // Tạo thông tin học sinh và thêm vào danh sách
      const studentInfo = document.createElement("div");
      studentInfo.classList.add("student-info");
  
      const nameElement = document.createElement("h4");
      nameElement.textContent = student.name;
      studentInfo.appendChild(nameElement);
  
      const favoriteElement = document.createElement("p");
      favoriteElement.textContent = "Số lượng yêu thích: " + student.favorite;
      studentInfo.appendChild(favoriteElement);
  
      studentItem.appendChild(studentInfo);
      studentListElement.appendChild(studentItem);
    });
  
    favoriteStudentsElement.style.display = "block";
  }
  
  displayFavoriteStudents();