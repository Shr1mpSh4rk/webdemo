var xValues = ["THPT Nguyễn Trãi-Thái Bình", "Chuyên Amsterdam Hà Nội", "Chuyên Lê Hồng Phong- Nam Định", "THPT Chu Văn Anh", "THPT Yên Hòa","THPT Chuyên KHTN"];
var yValues = [15, 20, 9, 11, 12,13];
var barColors = ["red", "green","blue","orange","black","yellow"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Các trường có tỉ lệ học sinh tham dự thi Oplympia cao nhất cả nước"
    }
  }
});