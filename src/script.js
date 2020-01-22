const formatDate = (d, f) => {
  f = f.replace(/yyyy/g, d.getFullYear());
  f = f.replace(/MM/g, ('0' + (d.getMonth() + 1)).slice(-2));
  f = f.replace(/dd/g, ('0' + d.getDate()).slice(-2));
  f = f.replace(/HH/g, ('0' + d.getHours()).slice(-2));
  f = f.replace(/mm/g, ('0' + d.getMinutes()).slice(-2));
  f = f.replace(/ss/g, ('0' + d.getSeconds()).slice(-2));
  f = f.replace(/SSS/g, ('00' + d.getMilliseconds()).slice(-3));
  return f;
};

const replaceRelativeTime = () => {
  const elems = document.getElementsByTagName('relative-time');
  for (let i = 0; i < elems.length; i++) {
    const e = elems[i];
    const dt = new Date(e.getAttribute('datetime'));
    e.innerHTML = formatDate(dt, 'yyyy/MM/dd HH:mm');
  }
};

const observer = new MutationObserver(replaceRelativeTime);
observer.observe(document.getElementsByTagName('body')[0], {
  attributes: true,
  childList: true
});
replaceRelativeTime();
