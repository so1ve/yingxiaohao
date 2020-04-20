var msg, _index = 0;
var config = [
    {
        html: `<label for="subject">主体</label><input type="text" id="subject" class="form-control" placeholder="楼主" required><label for="event">事件</label><input type="text" id="event" class="form-control" placeholder="氵帖" required><label for="subject-event">另一种说法</label><input type="text" id="subject-event" class="form-control" placeholder="获取经验" required>`,
        generate: function () {
            subject = $("#subject").val();
            _event = $("#event").val();
            subjectEvent = $("#subject-event").val();
            if (!subject.length || !_event.length || !subjectEvent.length) return;
            resultTitle = `${subject}${_event}是怎么回事呢？`
            result = `　　${subject}${_event}是怎么回事呢？${subject}相信大家都很熟悉，但是${subject}${_event}是怎么回事呢，下面就让小编带大家一起了解吧。\r\n　　${subject}${_event}，其实就是${subjectEvent}，大家可能会很惊讶${subject}怎么会${_event}呢？但事实就是这样，小编也感到非常惊讶。\r\n　　这就是关于${subject}${_event}的事情了，大家有什么想法呢，欢迎在评论区告诉小编一起讨论哦！`;
            $("#result-title").val(resultTitle);
            $("#result").val(result);
        }
    },
    {
        html: `<label for="modal">语气词</label><input type="text" id="modal" class="form-control" placeholder="震惊" required><label for="subject">主体物</label><input type="text" id="subject" class="form-control" placeholder="香蕉" required><label for="attribute">定语</label><input type="text" id="attribute" class="form-control" placeholder="尽量避免" required><label for="secSubject">与什么...（第二主体）</label><input type="text" id="secSubject" class="form-control" placeholder="木瓜" required><label for="event">事件</label><input type="text" id="event" class="form-control" placeholder="频繁混合使用" required>`,
        generate: function () {
            modal = $("#modal").val();
            subject = $("#subject").val();
            attribute = $("#attribute").val();
            secSubject = $("#secSubject").val();
            _event = $("#event").val();
            if (!modal.length || !subject.length || !attribute.length || !secSubject.length || !_event.length) return;
            resultTitle = `${modal}！${subject}${attribute}和${secSubject}${_event}！原因竟然是...`
            result = `    ${subject}为什么不能与${secSubject}${_event}，这究竟是怎么回事呢？${subject}相信大家很熟悉吧，但是不能与${secSubject}${_event}是怎么回事呢？下面就让小编带着大家一起去了解吧。\n    ${subject}不能与${secSubject}${_event}，其实就是${subject}不能与${secSubject}${_event}。大家可能会感到很惊讶，${subject}为什么${attribute}与${secSubject}${_event}。\n    这些就是${subject}为什么${attribute}与${secSubject}${_event}的全部内容了。大家有什么想法呢，欢迎在评论区里与小编留言互动哦~我们下期再见！`;
            $("#result-title").val(resultTitle);
            $("#result").val(result);
        }
    }
];

msg = ""
for (let i = 0; i < config.length; i++) {
    msg += `<div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="type-` + i + `" name="choose" class="custom-control-input" value="` + i + `">
    <label class="custom-control-label" for="type-` + i + `">文案` + (i + 1) + `</label>
</div>`; 
}

$("#radio").html(msg);

function reset () {
    $("#result").val("");
    $("#result-title").val("");
}

$("input[name='choose']").change(function () {
    reset();
    $('button').removeAttr("disabled");
    _index = Number($(this).val());
    msg = "";
    msg += config[_index].html;
    $("#show").html(msg);
});

$('#generate').on('click', function () {
    config[_index].generate();
});

$('#audio').on('click', function () {
    var url = "//tts.baidu.com/text2audio?cuid=baiduid&lan=zh&ctp=1&pdt=311&tex=" + $("#result").val();
    var player = new Audio(url);
    player.play();
});
