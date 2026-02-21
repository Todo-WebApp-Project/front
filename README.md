# TO-DO WebSite Project (Mingle)

## Project Overview
### 1. Team Member
<table>
	<thead>
    		<td colspan="4">BackEnd</td>
		<td colspan="1">FrontEnd</td>
	</thead>
	<tbody>
  	<tr>
    		<td>김다은</td>
		<td>김민정</td>
		<td>김홍주</td>
		<td>조윤상</td>
		<td>박재민</td>
  	</tr>
   	<tr>
    		<td><a href="https://github.com/fdaksjfj">@woody432</a></td>
		<td><a href="https://github.com/Mingguriguri">@Mingguriguri</a></td>
		<td><a href="https://github.com/zaqquum">@zaqquum</a></td>
		<td><a href="https://github.com/fdaksjf">@fdaksjf</a></td>
		<td><a href="https://github.com/jamminP">@jamminP</a></td>
  	</tr>
</tbody>
</table>


### 2. Project Purpose
이 프로젝트의 목적은 개인의 일정 관리 효율성을 극대화하는 동시에, 사용자 간의 상호작용 및 동기부여를 통해 생산성을 증진시키는 것입니다. 일정 관리 TODO 리스트, G메일과 연동되는 PC 캘린더 (클라우드 기반), 그리고 하루 챌린지를 통한 커뮤니티 참여 기능을 통합함으로써, 사용자는 자신의 시간을 보다 효과적으로 관리할 수 있게 되며, 매일 새로운 도전을 통해 개인적 성장을 이룰 수 있습니다. 이 어플리케이션은 사용자가 자신의 목표에 집중하고, 생산성을 극대화하며, 같은 목표를 가진 사람들과 소통하고 동기를 부여받을 수 있는 플랫폼을 제공하는 것을 목표로 합니다.

### 3. Key Features
1. 일정 관리 TODO 리스트: 사용자는 자신의 일정과 할 일 목록을 관리할 수 있는 개인화된 TODO 리스트를 사용할 수 있습니다. 이 리스트는 우선순위 설정, 마감 기한 지정, 분류별 태그 지정 등 다양한 기능을 제공하여, 사용자가 자신의 일정을 체계적으로 관리할 수 있게 합니다.

2. G메일 연동 PC 캘린더 (클라우드 기반): 사용자의 G메일 계정과 직접 연동되는 캘린더 기능을 통해, 이메일로 받은 일정 약속들을 자동으로 캘린더에 추가할 수 있습니다. 클라우드 기반으로 운영되어, 어떤 기기에서도 사용자의 일정을 동기화하고 접근할 수 있습니다.

3. 하루 챌린지 어플 (커뮤니티): 사용자는 매일 다양한 챌린지에 참여할 수 있으며, 이를 통해 새로운 습관을 형성하거나 개인적인 성장을 도모할 수 있습니다. 커뮤니티 기능을 통해 사용자들은 자신의 챌린지 진행 상황을 공유하고, 서로를 독려하며, 경험을 나눌 수 있습니다.

4. 통합 알림 시스템: G메일, 캘린더, TODO 리스트, 하루 챌린지 등 모든 기능에 걸쳐 통합 알림 시스템을 제공하여, 중요한 일정이나 마감일, 챌린지 알림을 놓치지 않도록 합니다.

5. 분석 및 보고서 기능: 사용자의 일정 관리 및 챌린지 참여 활동에 대한 분석을 제공하여, 시간 관리 효율성과 개인적 성장에 대한 인사이트를 얻을 수 있습니다.


### 4. Key elements of the user interface
1. Randing Page
<img width="1896" height="923" alt="2" src="https://github.com/user-attachments/assets/6621a8a8-9a4f-4784-9b49-672f890b124b" />

<br><br>

2. Todo Page
<img width="1919" height="943" alt="3" src="https://github.com/user-attachments/assets/7b2abdc7-d35a-46a1-a16a-a875940f5648" />
<br><br>

3. Calender Page
<img width="1919" height="945" alt="1" src="https://github.com/user-attachments/assets/222b73d1-1063-4b5a-9660-2b0fcc05b752" />


## Technical stack
<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Figma-F24E1E?&style=for-the-badge&logo=figma&logoColor=black"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?&style=for-the-badge&logo=css3&logoColor=black"/>
<img src="https://img.shields.io/badge/Font%20Awesome-528DD7?&style=for-the-badge&logo=Font%20Awesome&logoColor=black"/>
<img src="https://img.shields.io/badge/React%20Query-FF4154?&style=for-the-badge&logo=React%20Query&logoColor=black"/>
</div>

## Components and Page Structure
### 1. Components 
1. src >> RandingPage.jsx
2. nav >> navigator.jsx
3. settings >> Settings.jsx
4. community >> Challenge.jsx, Community.jsx
5. home >> AddEvent.jsx, Calender.jsx, EditEventSidebar.jsx, Main.jsx, Today.jsx, upcomming.jsx

### 2. Page Structure
- RandingPage - LoginPage - home - Upcoming <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Today <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Calender <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Challenge <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Community <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Settings
## Contribution
100%
