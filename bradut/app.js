class xmasTree {
  constructor(topP, leftP, size = 500, globe = 0, color = 'limegreen') {
    this.topP = topP;
    this.leftP = leftP;
    this.size = size;
    this.color = color;
    this.globe = globe;
  }
  frame = document.createElement('div');
  base = document.createElement('div');
  mid = document.createElement('div');
  top = document.createElement('div');
  globe1 = document.createElement('div');
  globe2 = document.createElement('div');
  globe3 = document.createElement('div');
  globe4 = document.createElement('div');
  globe5 = document.createElement('div');
  globe6 = document.createElement('div');
  globe7 = document.createElement('div');
  globe8 = document.createElement('div');
  globe9 = document.createElement('div');
  render() {
    this.frame.style.cssText = `position:absolute;top:${this.topP}px;left:${this.leftP}px;`;
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
    this.globe1.style.cssText =
      'position:absolute;top:200px; left:480px; width:30px; height:30px; background-image:radial-gradient(red,blue); border-radius:30px';
    this.globe2.style.cssText =
      'position:absolute;top:380px; left:320px; width:30px; height:30px; background-image:radial-gradient(green,yellow);border-radius:30px';
    this.globe3.style.cssText =
      'position:absolute;top:380px; left:650px; width:30px; height:30px; background-image:radial-gradient(blue,lime);border-radius:30px  ';
    this.globe4.style.cssText =
      'position:absolute;top:500px; left:480px; width:30px; height:30px; background-image:radial-gradient(red,blue); border-radius:30px';
    this.globe5.style.cssText =
      'position:absolute;top:580px; left:320px; width:30px; height:30px; background-image:radial-gradient(green,yellow);border-radius:30px';
    this.globe6.style.cssText =
      'position:absolute;top:580px; left:650px; width:30px; height:30px; background-image:radial-gradient(blue,lime);border-radius:30px  ';
    this.globe7.style.cssText =
      'position:absolute;top:800px; left:480px; width:30px; height:30px; background-image:radial-gradient(red,blue); border-radius:30px';
    this.globe8.style.cssText =
      'position:absolute;top:880px; left:320px; width:30px; height:30px; background-image:radial-gradient(green,yellow);border-radius:30px';
    this.globe9.style.cssText =
      'position:absolute;top:880px; left:650px; width:30px; height:30px; background-image:radial-gradient(blue,lime);border-radius:30px  ';

    this.frame.append(this.base);
    this.frame.append(this.mid);
    this.frame.append(this.top);
    if (this.globe === 1) {
      this.frame.append(this.globe1);
      this.frame.append(this.globe2);
      this.frame.append(this.globe3);
      this.frame.append(this.globe4);
      this.frame.append(this.globe5);
      this.frame.append(this.globe6);
      this.frame.append(this.globe7);
      this.frame.append(this.globe8);
      this.frame.append(this.globe9);
    }
    document.body.append(this.frame);
  }
}
