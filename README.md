# XPLA Terms

XPLA Terms 추가&수정 방법

1. 준비 사항

- node.js 설치
- vscode 설치 (필요에 따라)

<br/>

2. 소스코드 다운

- `git clone https://github.com/xpladev/xpla-terms.git`을 통해 github에 있는 xpla-terms 폴더를 다운받습니다.
- xpla-terms 폴더를 vscode로 열어줍니다.
- 터미널에서 `npm install` 을 통해, 의존성 모듈들을 설치해줍니다.

<br/>

3. 소스코드 실행

- `npm run start` 명령어로 실행합니다.
- <http://localhost:3457> 에 접속하면, 수정 내역을 실시간으로 확인 가능합니다.

<br/>

4. 대부분의 경우 privacy.json, cookie.json, tou.json 등 json파일을 수정하는 것만으로 내용 적용이 가능합니다. (vscode 단축키 `ctrl+p` 로 파일명 검색 가능)

<br/>

5. json 파일들은 아래와 같은 형식으로 구성되어 있습니다.

```
[
    {
        "date": "2024-07-15",
        "article" : [
            {
                "index" : 1,
                "english" : {
                    "title" : "",
                    "content" : "",
                    "contentInnerhtml" : true,
                    "noborder": true,
                    "table" : []
                }
            }
        ]
    },
    {
        "date": "2024-08-15",
        "article" : [
            {
                "index" : 1,
                "korean" : {
                    "title" : "",
                    "content" : "",
                }
            }
        ]
    }
]
```

* 가장 상위 object에서 날짜별 페이지들이 List로 구성되어 있습니다.
    * 각 페이지들도 개별 object로 구성되어 있습니다.
    * object에 index를 표시하면 페이지 상단 Index에 나타나고, index 항목을 없애면 나타나지 않습니다.
    * 한국어일 경우 "korean", 영어일 경우는 "english"를 key로 하는 object로 구성됩니다.
        * noborder 항목을 true로 할 경우, 항목 아래에 빈공간이 더 커집니다. 
        * contentInnerhtml 항목은 html을 인지합니다. 글자 폰트를 굵게 하거나, 혹은 하이퍼링크를 걸 때 html을 이용하기 때문에, 이 항목을 true로 설정해주어야 합니다. 
        * table 항목도 비슷한 구조로 되어 있습니다. 다만 style을 적용해야 되기 때문에, 어려움이 있을 수 있습니다. 기존에 table 항목이 어떻게 구성되어 있는지를 참고하여, 작성해주시기 바랍니다.
        * 대부분의 항목은 포함시켜도 되고, 안시킬 경우 자동으로 false로 인식합니다.