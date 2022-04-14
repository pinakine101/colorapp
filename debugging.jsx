mypathItems = app.activeDocument.layers[0].pathItems;

mypathItems[0].strokeWidth=2.5;

mypathItems[1].strokeWidth=3.5;

mypathItems[2].strokeWidth=20.5;

1 
2  if (app.documents.length > 0) {
3    var doc = app.activeDocument;
4    var sel = doc.selection;
5    var clipPath;
6    if (sel.length > 0) {
7      if (sel[0].typename == 'GroupItem' && sel[0].clipped == true) {
8        var clipGroup = sel[0].pageItems.length;
9        for (var i = 0; i < clipGroup; i++) {
10         if (sel[0].pageItems[i].typename == 'PathItem' &&
               sel[0].pageItems[i].clipping == true) {
11           clipPath = sel[0].pageItems[i];
12           break;
13         };
14       };
15       app.executeMenuCommand('releaseMask');
16       clipPath.remove();
17     }
18     else {
19      alert ('Выделение не является объектом-маской!');
20     };
21   }
22   else {
23     alert ('Нет выделенных объектов!');
24   };
25 }
26 else {
27   alert ('Нет открытых документов!');
28 };