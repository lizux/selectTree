// ��ȡ�����¼��ڵ㣬ִ�е�ǰ�ڵ�Ĳ���
function toggleChild(obj, isChecked) {
    $(obj).find('input:checkbox').each(function() {
        if (this.checked != isChecked) {
            this.checked = isChecked;
        }
    });
}
// ��ѡ�е�ǰ�ڵ㣬���ȡͬ����Ľڵ��б���ѡ��״̬һ�£���ݹ鸳ֵ�����ڵ㣻��ȡ��ѡ�е�ǰ�ڵ㣬��ݹ鸳ֵ�����ڵ㡣
function toggleParent(obj, isChecked) {
    if (obj) {
        var input = $(obj).children('label').find('input:checkbox');
        if (input.prop('checked') != isChecked) {
            input.prop('checked', isChecked);
        }
        var parentNode = $(obj).parents('li');
        if (parentNode.length > 0) {
            parentNode = parentNode.eq(0);
            var allChecked = isChecked;
            if (allChecked == true) {
                parentNode.children('ul').children('li').each(function() {
                    var elem = $(this).children('label').find('input:checkbox');
                    if (elem.prop('checked') == false) {
                        allChecked = false;
                        return false;
                    }
                })
            }
            toggleParent(parentNode, allChecked);
        };
    }
}
