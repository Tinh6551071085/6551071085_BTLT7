function getOptions(){
    let text= "";
    let cout = 0;
  $("form select option").each(function(){
    text += $(this).text()+"\n";
    cout++;
  })
  alert("Số lượng mục: " + cout + "\nDanh sách: \n" + text);
}