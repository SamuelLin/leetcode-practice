// https://leetcode.com/problems/my-calendar-i/

var MyCalendar = function() {
  this.calendar = [];
};

/** 
* @param {number} start 
* @param {number} end
* @return {boolean}
*/
MyCalendar.prototype.book = function(start, end) {
  for (let date of this.calendar) {
      if (end > date[0] && start < date[1]) return false;
  }
  this.calendar.push([start, end])
  return true
};

/** 
* Your MyCalendar object will be instantiated and called as such:
* var obj = new MyCalendar()
* var param_1 = obj.book(start,end)
*/
