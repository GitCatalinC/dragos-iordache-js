class xmasTree {
  constructor(topP, leftP, size, color = 'limegreen') {
    this.topP = topP;
    this.leftP = leftP;
    this.size = size;
    this.color = color;
  }
  frame = document.createElement('div');
  base = document.createElement('div');
  mid = document.createElement('div');
  top = document.createElement('div');

  render() {
    this.frame.style.cssText = `position:absolute;top:${this.topP}px;left:${this.leftP}px;border: 5px solid lime;`;
    this.base.style.cssText = `position:absolute;top:500px;width: 0; height: 0; border-left: ${this.size}px solid transparent; border-right: ${this.size}px solid transparent; border-bottom: ${this.size}px solid ${this.color};`;
    this.mid.style.cssText = `position:absolute;top:350px;left:250px;width: 0; height: 0; border-left: ${
      this.size / 2
    }px solid transparent; border-right: ${
      this.size / 2
    }px solid transparent; border-bottom: ${this.size / 2}px solid ${
      this.color
    };`;
    this.top.style.cssText = `position:absolute;top:230px;left:330px;width: 0; height: 0; border-left: ${
      this.size / 3
    }px solid transparent; border-right: ${
      this.size / 3
    }px solid transparent; border-bottom: ${this.size / 3}px solid ${
      this.color
    };`;
    this.frame.append(this.base);
    this.frame.append(this.mid);
    this.frame.append(this.top);

    document.body.append(this.frame);
  }
}
