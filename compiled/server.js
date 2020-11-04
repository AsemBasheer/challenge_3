const express = require('express');
let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/./public'));
// app.use(express.static('public'))
app.use(express.json());

app.get('/app', function (req, res) {
    res.sendFile(__dirname + '/./compiled/client/app.js');
});

app.post('/', function (req, res) {
    console.log(req.body);
    res.end();
});

let port = 3000;

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NlcnZlci5qcyJdLCJuYW1lcyI6WyJleHByZXNzIiwicmVxdWlyZSIsImFwcCIsInVzZSIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsInN0YXRpYyIsIl9fZGlybmFtZSIsImpzb24iLCJnZXQiLCJyZXEiLCJyZXMiLCJzZW5kRmlsZSIsInBvc3QiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsImVuZCIsInBvcnQiLCJsaXN0ZW4iXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLFVBQVVDLFFBQVEsU0FBUixDQUFoQjtBQUNBLElBQUlDLE1BQU1GLFNBQVY7O0FBRUFFLElBQUlDLEdBQUosQ0FBUUgsUUFBUUksVUFBUixDQUFtQixFQUFFQyxVQUFVLElBQVosRUFBbkIsQ0FBUjtBQUNBSCxJQUFJQyxHQUFKLENBQVFILFFBQVFNLE1BQVIsQ0FBZUMsWUFBWSxXQUEzQixDQUFSO0FBQ0E7QUFDQUwsSUFBSUMsR0FBSixDQUFRSCxRQUFRUSxJQUFSLEVBQVI7O0FBRUFOLElBQUlPLEdBQUosQ0FBUSxNQUFSLEVBQWdCLFVBQVNDLEdBQVQsRUFBY0MsR0FBZCxFQUFrQjtBQUM5QkEsUUFBSUMsUUFBSixDQUFhTCxZQUFVLDJCQUF2QjtBQUNILENBRkQ7O0FBSUFMLElBQUlXLElBQUosQ0FBUyxHQUFULEVBQWMsVUFBVUgsR0FBVixFQUFlQyxHQUFmLEVBQW9CO0FBQzlCRyxZQUFRQyxHQUFSLENBQVlMLElBQUlNLElBQWhCO0FBQ0FMLFFBQUlNLEdBQUo7QUFDSCxDQUhEOztBQUtBLElBQUlDLE9BQU8sSUFBWDs7QUFFQWhCLElBQUlpQixNQUFKLENBQVdELElBQVgsRUFBaUIsWUFBWTtBQUN6QkosWUFBUUMsR0FBUixDQUFhLHFCQUFvQkcsSUFBSyxFQUF0QztBQUNILENBRkQiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcclxubGV0IGFwcCA9IGV4cHJlc3MoKTtcclxuXHJcbmFwcC51c2UoZXhwcmVzcy51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpXHJcbmFwcC51c2UoZXhwcmVzcy5zdGF0aWMoX19kaXJuYW1lICsgJy8uL3B1YmxpYycpKVxyXG4vLyBhcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcclxuYXBwLnVzZShleHByZXNzLmpzb24oKSlcclxuXHJcbmFwcC5nZXQoJy9hcHAnLCBmdW5jdGlvbihyZXEsIHJlcyl7XHJcbiAgICByZXMuc2VuZEZpbGUoX19kaXJuYW1lKycvLi9jb21waWxlZC9jbGllbnQvYXBwLmpzJyk7XHJcbn0pO1xyXG5cclxuYXBwLnBvc3QoJy8nLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxyXG4gICAgcmVzLmVuZCgpXHJcbn0pO1xyXG5cclxubGV0IHBvcnQgPSAzMDAwO1xyXG5cclxuYXBwLmxpc3Rlbihwb3J0LCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xyXG59KTsiXX0=