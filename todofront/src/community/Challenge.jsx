import React, { useState, useRef, useEffect } from "react";
import "./css/Challenge.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
  faBell,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

function ChallengePage() {
  // 더미데이터
  const posts = [
    {
      id: 1,
      tag: "운동",
      title: "운동1",
      people: 1,
      thumbnail:
        "https://www.becomingminimalist.com/wp-content/uploads/2020/08/life-is-too-short-1024x649.jpg",
    },
    {
      id: 2,
      tag: "운동",
      title: "운동2",
      people: 2,
      thumbnail:
        "https://static01.nyt.com/images/2023/07/19/multimedia/19WELL-MIDYEAR-FITNESS-ROUNDUP2-jphk/19WELL-MIDYEAR-FITNESS-ROUNDUP2-jphk-superJumbo.jpg",
    },
    {
      id: 3,
      tag: "운동",
      title: "운동3",
      people: 3,
      thumbnail:
        "https://vertimax.com/hs-fs/hubfs/Isometric/isometric%20exercise%20-%20header%201200x800.png?width=1238&name=isometric%20exercise%20-%20header%201200x800.png",
    },
    {
      id: 4,
      tag: "운동",
      title: "운동4",
      people: 4,
      thumbnail:
        "https://d.newsweek.com/en/full/2144437/group-people-running.jpg?w=1600&h=900&q=88&f=a9d3d80d6d1a546e9ba6d20a820c0b1c",
    },
    {
      id: 5,
      tag: "운동",
      title: "운동5",
      people: 5,
      thumbnail:
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2023/08/Calisthenic.jpeg.jpg",
    },
    {
      id: 6,
      tag: "생활",
      title: "생활1",
      people: 6,
      thumbnail:
        "https://images.squarespace-cdn.com/content/v1/5a908bea1aef1d83b3152e4f/1667233995921-IJ7LBXFREWO5ZG1GKCHE/unsplash-image-noydSJIWMSg.jpg",
    },
    {
      id: 7,
      tag: "생활",
      title: "생활2",
      people: 7,
      thumbnail:
        "https://assets.thehansindia.com/h-upload/2019/12/31/250281-live-life-to-the-fullest.webp",
    },
    {
      id: 8,
      tag: "생활",
      title: "생활3",
      people: 8,
      thumbnail:
        "https://thetrusthospital.com/wp-content/uploads/2023/07/Blog_9_Ways_to_Take_Responsiblity_for_Your_Life.jpeg",
    },
    {
      id: 9,
      tag: "생활",
      title: "생활4",
      people: 9,
      thumbnail:
        "https://media.licdn.com/dms/image/C4E12AQFrxZOIZ5rXxA/article-cover_image-shrink_720_1280/0/1625549088141?e=2147483647&v=beta&t=YWD77sEWDAjlRkryeVHauVUCeh-YFW3_NusXZG5WdbQ",
    },
    {
      id: 10,
      tag: "생활",
      title: "생활5",
      people: 10,
      thumbnail:
        "https://s.abcnews.com/images/Health/GTY_fulfilling_life_jtm_140207_16x9_992.jpg?w=384",
    },
    {
      id: 11,
      tag: "식생활",
      title: "식생활1",
      people: 11,
      thumbnail:
        "https://src.hidoc.co.kr/image/lib/2023/5/17/1684296239083_0.jpg",
    },
    {
      id: 12,
      tag: "식생활",
      title: "식생활2",
      people: 12,
      thumbnail:
        "https://media.istockphoto.com/id/603906484/ko/%EC%82%AC%EC%A7%84/%EC%95%BC%EC%B1%84-%EC%83%90%EB%9F%AC%EB%93%9C.jpg?s=612x612&w=0&k=20&c=JvgKlJ2rnibIPMgZWkjQhoNRa16l1CsrH2QVAOkvQ0Y=",
    },
    {
      id: 13,
      tag: "식생활",
      title: "식생활3",
      people: 13,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEIz6iUwGURWJ3EJIAholTzIaR2bbB8WhWA8ZItFEV7Em48K66pZspCNqMZmCNsERf7Z8&usqp=CAU",
    },
    {
      id: 14,
      tag: "식생활",
      title: "식생활4",
      people: 14,
      thumbnail:
        "https://mblogthumb-phinf.pstatic.net/MjAxODEwMjNfMTA1/MDAxNTQwMjc5ODg2Nzc2.2B6e-yXDG9bFX2rIVRQCqxnQ485a2sf0j5dadDwGLa0g.cCm0YTcCyXDQf_dYlrzQjcIvIAykTRhcmJagJzzhRucg.PNG.homashim/1.png?type=w800",
    },
    {
      id: 15,
      tag: "식생활",
      title: "식생활5",
      people: 15,
      thumbnail:
        "https://previews.123rf.com/images/tommisch/tommisch1705/tommisch170500150/77939604-%EC%A0%8A%EC%9D%80-%EC%97%AC%EC%9E%90%EA%B0%80-%EA%B0%80%EC%A0%95%EC%97%90%EC%84%9C-%EB%B6%80%EC%97%8C%EC%97%90%EC%84%9C-%EC%9A%94%EB%A6%AC-%EA%B1%B4%EA%B0%95%ED%95%9C-%EC%9D%8C%EC%8B%9D-%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8-%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8-%EA%B0%9C%EB%85%90%EC%9E%85%EB%8B%88%EB%8B%A4-%EA%B1%B4%EA%B0%95%ED%95%9C-%EC%83%9D%ED%99%9C-%EC%A7%91%EC%97%90%EC%84%9C-%EC%9A%94%EB%A6%AC%ED%95%98%EA%B8%B0-%EC%9D%8C%EC%8B%9D%EC%9D%84-%EC%A4%80%EB%B9%84%ED%95%98%EB%8B%A4-%EC%97%AC%EC%9E%90%EB%8A%94-%EC%B9%BC%EC%9C%BC%EB%A1%9C.jpg",
    },
    {
      id: 16,
      tag: "취미",
      title: "취미1",
      people: 16,
      thumbnail:
        "https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/article/__icsFiles/artimage/2017/08/30/c_km601/shutterstock_530197123_540.jpg",
    },
    {
      id: 17,
      tag: "취미",
      title: "취미2",
      people: 17,
      thumbnail:
        "https://cdn.kormedi.com/wp-content/uploads/2022/02/220216_02_02-580x386.jpg",
    },
    {
      id: 18,
      tag: "취미",
      title: "취미3",
      people: 18,
      thumbnail:
        "https://cdn.kormedi.com/wp-content/uploads/2022/07/ck_pc0020390703_l.jpg",
    },
    {
      id: 19,
      tag: "취미",
      title: "취미4",
      people: 19,
      thumbnail:
        "https://kormedi.com/wp-content/uploads/2022/02/220216_02_01-580x387.jpg",
    },
    {
      id: 20,
      tag: "취미",
      title: "취미5",
      people: 20,
      thumbnail:
        "https://cdn.kormedi.com/wp-content/uploads/2022/02/220216_02_03-580x387.jpg",
    },
    {
      id: 21,
      tag: "뷰티",
      title: "뷰티1",
      people: 21,
      thumbnail:
        "https://www.cosinkorea.com/data/photos/20201253/art_16090847296751_697f67.jpg",
    },
    {
      id: 22,
      tag: "뷰티",
      title: "뷰티2",
      people: 22,
      thumbnail:
        "https://www.imagazinekorea.com/upload/DailyPick/B_20238921256_542824.jpg",
    },
    {
      id: 23,
      tag: "뷰티",
      title: "뷰티3",
      people: 23,
      thumbnail: "https://thumb.mt.co.kr/06/2017/06/2017062117412447955_4.jpg",
    },
    {
      id: 24,
      tag: "뷰티",
      title: "뷰티4",
      people: 24,
      thumbnail: "https://thumb.mt.co.kr/06/2017/07/2017072114032674372_4.jpg",
    },
    {
      id: 25,
      tag: "뷰티",
      title: "뷰티5",
      people: 25,
      thumbnail:
        "https://www.imagazinekorea.com/upload/DailyPick/A_2023111225130_714327.jpg",
    },
    {
      id: 26,
      tag: "기타",
      title: "기타1",
      people: 26,
      thumbnail:
        "https://www.gilhospital.com/html-repositories/mobile/img/main/gil_202211.png",
    },
    {
      id: 27,
      tag: "기타",
      title: "기타2",
      people: 27,
      thumbnail:
        "https://www.gilhospital.com/documents/20182/380218/focus_36.jpg/2ca65bf0-6863-4b21-b35d-70b3fdb4af15?t=1663053955166",
    },
    {
      id: 28,
      tag: "기타",
      title: "기타3",
      people: 28,
      thumbnail:
        "https://flexible.img.hani.co.kr/flexible/normal/640/308/imgdb/original/2022/1213/20221213502604.jpg",
    },
    {
      id: 29,
      tag: "기타",
      title: "기타4",
      people: 29,
      thumbnail:
        "https://cdn.imweb.me/upload/S2017082859a39c5e17a60/ce69804718987.jpg",
    },
    {
      id: 30,
      tag: "기타",
      title: "기타5",
      people: 30,
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqhpJpX4puWmbmeN3eFV_bdMsBSoCr99NnGJrujLpX6vPr7itf_UGYTfR2XKGBlN6hsgU&usqp=CAU",
    },
  ];
  const [selectedTag, setSelectedTag] = useState("전체"); // 기본값은 "전체"로 설정
  const [filteredPosts, setFilteredPosts] = useState(posts); // 처음에는 모든 포스트를 보여줍니다.
  const [isClicked, setIsClicked] = useState(false);

  const filterPostsByTag = (tag) => {
    setSelectedTag(tag); // 현재 선택된 태그 상태 업데이트
    if (tag === "전체") {
      setFilteredPosts(posts); // 전체 포스트 보여주기
    } else {
      const filtered = posts.filter((post) => post.tag === tag); // 선택된 태그에 맞는 포스트만 필터링
      setFilteredPosts(filtered);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const containerRef = useRef(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsModalOpen(false); // 모달 창 닫기
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 모달을 열고, 선택된 포스트의 정보를 저장하는 함수
  const openModalWithPost = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <div className="Today_Page" ref={containerRef}>
      <div className="ChallengePage_TOP">
        <div className="searching_challenge">
          <input
            className={`inputsearching_data_challenge ${
              isClicked ? "focused" : ""
            }`}
            type="text"
            placeholder="검색어를 입력하세요"
            onClick={() => setIsClicked(true)} // 클릭 시 isClicked를 true로 설정
            onBlur={() => setIsClicked(false)}
          ></input>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="challengeIcon_search"
          />
          <button className="button_challenge1">
            <FontAwesomeIcon
              icon={faPlus}
              className="challengeIcon_search_button"
            />
          </button>
          <button className="button_challenge2">
            <FontAwesomeIcon
              icon={faBell}
              className="challengeIcon_search_button"
            />
          </button>
          <button className="button_challenge3">
            <FontAwesomeIcon
              icon={faCircleUser}
              className="challengeIcon_search_button"
            />
          </button>
        </div>
        <div className="Tag_lists">
          <button
            className="button_all"
            onClick={() => filterPostsByTag("전체")}
          >
            전체
          </button>
          <button
            className="button_exercise"
            onClick={() => filterPostsByTag("운동")}
          >
            운동
          </button>
          <button
            className="button_life"
            onClick={() => filterPostsByTag("생활")}
          >
            생활
          </button>
          <button
            className="button_diet"
            onClick={() => filterPostsByTag("식생활")}
          >
            식생활
          </button>
          <button
            className="button_hobby"
            onClick={() => filterPostsByTag("취미")}
          >
            취미
          </button>
          <button
            className="button_beauty"
            onClick={() => filterPostsByTag("뷰티")}
          >
            뷰티
          </button>
          <button
            className="button_ex"
            onClick={() => filterPostsByTag("기타")}
          >
            기타
          </button>
        </div>
        <div className="challenge_body">
          {filteredPosts.map((post) => (
            <div key={post.id} onClick={() => openModalWithPost(post)}>
              <img
                src={post.thumbnail}
                alt={post.title}
                style={{ width: "340px", height: "200px" }}
              />
              <h3>{post.title}</h3>
              <p className="tag_css"># {post.tag}</p>
            </div>
          ))}
        </div>
        {isModalOpen && selectedPost && (
          <div className="modal_challenge" ref={containerRef}>
            <div className="modal_conponent_challenge">
              <img
                src={selectedPost.thumbnail}
                alt={selectedPost.title}
                style={{
                  width: "500px",
                  height: "200px",
                  borderRadius: "15px",
                }}
              />
              <h3>
                {selectedPost.title} #{selectedPost.tag}
              </h3>
              <p>참여 인원: {selectedPost.people}</p>
              <button className="modal_challenge_button" onClick={closeModal}>
                참여하기
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChallengePage;
