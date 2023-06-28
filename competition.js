const contests = [
    {
      name: "Tháng 3, quý 3, năm 2023",
      date: "2023-06-25",
      url: "https://www.youtube.com/watch?v=Nf2wpN1y44c"
    },
    {
      name: "Tuần 3, tháng 3, quý 3, năm 2023",
      date: "2023-06-18",
      url: "https://www.youtube.com/watch?v=8HOOxGbmdbc"
    },
    {
      name: "Tuần 2, tháng 3, quý 3, năm 2023",
      date: "2023-06-11",
      url: "https://www.youtube.com/watch?v=6z2_tC6cCTo"
    },
    {
      name: "Tuần 1, tháng 3, quý 3, năm 2023",
      date: "2023-06-04",
      url: "https://www.youtube.com/watch?v=IZMS3JMlWLQ&t=14s"
    },
    {
      name: "Tháng 2, quý 3, năm 2023",
      date: "2023-05-28",
      url: "https://www.youtube.com/watch?v=Sit-Q23SHyw&t=2s"
    }
  ];
  
  function displayRecentContests() {
    const recentContestsElement = document.getElementById("recentContests");
    const contestListElement = document.getElementById("contestList");
    contestListElement.innerHTML = ""; // Xóa nội dung cũ
  
    // Sắp xếp các cuộc thi theo thời gian
    const sortedContests = contests.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  
    // Hiển thị các cuộc thi gần đây
    sortedContests.forEach(contest => {
      const contestItem = document.createElement("li");
      const contestLink = document.createElement("a");
      contestLink.href = contest.url;
      contestLink.textContent = contest.name;
      contestItem.appendChild(contestLink);
      contestListElement.appendChild(contestItem);
    });
  
    recentContestsElement.style.display = "block";
  }
  
  displayRecentContests();
  
// thi tháng
const contests1 = [
    {
      name: "Contest 1",
      date: "2023-06-25",
      url: "https://example.com/contest1"
    },
    {
      name: "Contest 2",
      date: "2023-06-20",
      url: "https://example.com/contest2"
    },
    {
      name: "Contest 3",
      date: "2023-06-18",
      url: "https://example.com/contest3"
    },
    {
      name: "Contest 4",
      date: "2023-06-10",
      url: "https://example.com/contest4"
    },
    {
      name: "Contest 5",
      date: "2023-05-30",
      url: "https://example.com/contest5"
    }
  ];
  
  function displayRecentContests1() {
    const recentContestsElement1 = document.getElementById("recentContests1");
    const contestListElement1 = document.getElementById("contestList1");
    contestListElement1.innerHTML = ""; // Xóa nội dung cũ
  
    // Sắp xếp các cuộc thi theo thời gian
    const sortedContests1 = contests1.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  
    // Hiển thị các cuộc thi gần đây
    sortedContests1.forEach(contest1 => {
      const contestItem1 = document.createElement("li");
      const contestLink1 = document.createElement("a");
      contestLink1.href = contest1.url;
      contestLink1.textContent = contest1.name;
      contestItem1.appendChild(contestLink1);
      contestListElement1.appendChild(contestItem1);
    });
  
    recentContestsElement1.style.display = "block";
  }
  
  displayRecentContests1();

  // thi nam
  const contests2 = [
    {
      name: "Contest 1",
      date: "2023-06-25",
      url: "https://example.com/contest1"
    },
    {
      name: "Contest 2",
      date: "2023-06-20",
      url: "https://example.com/contest2"
    },
    {
      name: "Contest 3",
      date: "2023-06-18",
      url: "https://example.com/contest3"
    },
    {
      name: "Contest 4",
      date: "2023-06-10",
      url: "https://example.com/contest4"
    },
    {
      name: "Contest 5",
      date: "2023-05-30",
      url: "https://example.com/contest5"
    }
  ];
  
  function displayRecentContests2() {
    const recentContestsElement2 = document.getElementById("recentContests2");
    const contestListElement2 = document.getElementById("contestList2");
    contestListElement2.innerHTML = ""; // Xóa nội dung cũ
  
    // Sắp xếp các cuộc thi theo thời gian
    const sortedContests2 = contests2.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  
    // Hiển thị các cuộc thi gần đây
    sortedContests2.forEach(contest2 => {
      const contestItem2 = document.createElement("li");
      const contestLink2 = document.createElement("a");
      contestLink2.href = contest2.url;
      contestLink2.textContent = contest2.name;
      contestItem2.appendChild(contestLink2);
      contestListElement2.appendChild(contestItem2);
    });
  
    recentContestsElement2.style.display = "block";
  }
  
  displayRecentContests2();
// thi nam
const contests3 = [
    {
      name: "Contest 1",
      date: "2023-06-25",
      url: "https://example.com/contest1"
    },
    {
      name: "Contest 2",
      date: "2023-06-20",
      url: "https://example.com/contest2"
    },
    {
      name: "Contest 3",
      date: "2023-06-18",
      url: "https://example.com/contest3"
    },
    {
      name: "Contest 4",
      date: "2023-06-10",
      url: "https://example.com/contest4"
    },
    {
      name: "Contest 5",
      date: "2023-05-30",
      url: "https://example.com/contest5"
    }
  ];
  
  function displayRecentContests3() {
    const recentContestsElement3 = document.getElementById("recentContests3");
    const contestListElement3 = document.getElementById("contestList3");
    contestListElement3.innerHTML = ""; // Xóa nội dung cũ
  
    // Sắp xếp các cuộc thi theo thời gian
    const sortedContests3 = contests3.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  
    // Hiển thị các cuộc thi gần đây
    sortedContests3.forEach(contest3 => {
      const contestItem3 = document.createElement("li");
      const contestLink3 = document.createElement("a");
      contestLink3.href = contest3.url;
      contestLink3.textContent = contest3.name;
      contestItem3.appendChild(contestLink3);
      contestListElement3.appendChild(contestItem3);
    });
  
    recentContestsElement3.style.display = "block";
  }
  
  displayRecentContests3();