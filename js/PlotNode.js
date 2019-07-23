//剧情队列
function PlotQueue (id, plotArray, keyNode) {
    this.plotArray = plotArray;
    this.id = id;
    this.keyNode = keyNode;
    this.getPlotNode = function (id) {
        if (id > plotArray.length - 1) {
            return this.keyNode;
        } else {
            return this.plotArray[id];
        }
    }
}

// 剧情节点
function PlotNode (id, content, leftOption, rightOption) {
    this.id = id;
    this.content = content;
    this.leftOption = leftOption;
    this.rightOption = rightOption;
}

//关键节点(继承剧情节点)
function KeyNode (id, content, leftOption, rightOption) {
    // PlotNode.call(this,arguments);
    PlotNode.call(this, id, content, leftOption.option, rightOption.option);
    this.leftNext = leftOption.id;
    this.rightNext = rightOption.id;

    
}

//关键节点来选择下个剧情队列
function getNextQueue (nextQueueId) {
    return allPlotQueues.get(nextQueue);
}

// 返回一个关键节点的左右选项
function getChoice (id, content) {
    return {
        'id': id,
        'option': content
    }
}

// 关键节点继承剧情节点
KeyNode.prototype = new PlotNode();
KeyNode.prototype.constructor = KeyNode;
KeyNode.prototype.getNextQueue = getNextQueue;

