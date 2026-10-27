(function(){
    var modalData = {
      privacy: {
        title: "개인정보처리방침",
        content: "이퀴비젼에이아이 주식회사(이하 \"회사\")는 「개인정보 보호법」에 따라 이용자의 개인정보를 보호하고 관련 고충을 신속하게 처리하기 위하여 다음과 같이 개인정보처리방침을 공개합니다.\n\n1. 처리하는 개인정보 항목과 목적\n- 항목: 문의 이메일로 보내 주신 이메일 주소와, 보내 주신 내용에 적힌 정보(이름·소속·연락처 등 이용자가 스스로 적은 것)\n- [전화 문의] 전화로 문의하시는 경우 말씀하신 문의 내용과 발신 번호를 확인합니다. 통화는 녹음하지 않으며, 발신 번호는 업무용 휴대전화의 통화 기록에 남을 수 있어 3개월이 지나면 삭제합니다. 도박 문제로 힘들다는 호소 등 민감할 수 있는 통화는 응대 후 지체 없이 삭제하고 처리 건수만 남깁니다.\n- 목적: 문의 확인과 답변(이메일·전화)\n- 이 사이트는 회원가입을 받지 않으며, 쿠키·방문자 분석 도구·광고 도구를 사용하지 않습니다.\n\n2. 처리 및 보유 기간\n- 문의 처리 완료 후 1년간 보관한 뒤 파기합니다. 다른 법령에서 보존을 요구하는 경우에는 해당 기간 동안 보관합니다.\n- 전화 문의 발신 번호: 업무용 휴대전화 통화 기록, 3개월\n- 도박 문제로 힘들다는 호소 등 민감할 수 있는 내용이 담긴 문의는 응대가 끝나면 지체 없이 삭제하고 처리 건수만 남깁니다.\n\n3. 개인정보의 파기 절차 및 방법\n- 절차: 보유 기간이 끝났거나 처리 목적이 달성된 개인정보는 개인정보보호책임자의 확인을 거쳐 파기합니다.\n- 방법: 전자적 파일(이메일)은 복구할 수 없는 방법으로 영구 삭제합니다.\n\n4. 개인정보의 제3자 제공\n- 회사는 문의 내용을 제3자에게 제공하지 않습니다. 다만 정보주체의 별도 동의가 있거나 법령에 특별한 규정이 있는 경우는 예외로 합니다.\n\n5. 개인정보 처리의 위탁 및 국외 이전\n- 이전받는 자: Google LLC (미국, Gmail 서비스 제공자)\n  · 이전 항목: 문의 이메일의 이메일 주소와 보내 주신 내용\n  · 이용 목적: 문의 이메일 수신·보관\n  · 이전 시기·방법: 이메일 발송 시 네트워크(암호화 통신)를 통해 전송\n  · 보유·이용 기간: 위 2항의 보유 기간과 동일\n- 이전받는 자: GitHub, Inc. (미국): 웹사이트 호스팅 — 접속 시 IP 주소 등 접속 정보가 자동 처리될 수 있음\n- 정보주체는 국외 이전을 거부할 수 있으며, 거부하는 경우 이메일 대신 전화(010-3799-8188)로 문의하실 수 있습니다.\n\n6. 정보주체의 권리·의무 및 행사 방법\n- 정보주체는 회사에 대해 언제든지 개인정보 열람, 정정·삭제, 처리정지 및 동의 철회를 요구할 수 있으며, 이메일 또는 전화로 요청하시면 회사는 지체 없이 조치합니다. 단, 법령에서 보존을 요구하는 정보는 삭제를 요구할 수 없습니다.\n\n7. 개인정보의 안전성 확보 조치\n- 관리적 조치: 개인정보 취급자 최소화, 접근 권한 관리\n- 기술적 조치: 사이트 전송 구간 HTTPS 암호화\n\n8. 개인정보보호책임자 및 문의 창구\n- 개인정보보호책임자: 오성수 (대표이사)\n- 이메일: equivisionai@gmail.com / 대표전화: 010-3799-8188\n\n9. 권리 침해에 대한 구제\n- 개인정보침해신고센터(privacy.kisa.or.kr, 국번 없이 118), 개인정보분쟁조정위원회(kopico.go.kr, 1833-6972) 등에 상담·신고할 수 있습니다.\n\n10. 방침의 변경\n- 이 방침이 바뀌는 경우 시행 7일 전부터 이 사이트에 공지합니다.\n\n시행일: 2026년 10월 27일"
      },
      noEmail: {
        title: "이메일무단수집거부 고지",
        content: `본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부합니다.

이를 위반하여 이메일 주소를 무단으로 수집, 판매, 유통하거나 이를 이용해 영리 목적의 광고성 정보를 전송할 경우 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 제50조의2 및 제74조에 따라 처벌될 수 있습니다.

게시일자: 2026년 9월 21일`
      }
    };
    var overlay=document.getElementById('modalOverlay'),lastFocused=null;
    window.openModal=function(t,trg){var d=modalData[t];if(!d)return;lastFocused=trg||document.activeElement;document.getElementById('modalTitle').innerText=d.title;var b=document.getElementById('modalBody');b.innerText=d.content;b.scrollTop=0;overlay.style.display='flex';document.body.style.overflow='hidden';document.getElementById('modalCloseBtn').focus();};
    window.closeModalDirect=function(){overlay.style.display='none';document.body.style.overflow='';if(lastFocused)lastFocused.focus();};
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&overlay.style.display==='flex')window.closeModalDirect();if(e.key==='Tab'&&overlay.style.display==='flex'){var f=overlay.querySelectorAll('button,[tabindex="0"]'),a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus();}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus();}}});
})();
