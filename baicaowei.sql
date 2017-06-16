/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : baicaowei

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-06-16 16:36:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `feature` varchar(255) DEFAULT NULL,
  `price` varchar(40) DEFAULT NULL,
  `imgurl` varchar(200) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `weight` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '夏威夷果', '澳洲原产奶油味', '33.90', 'img/img1.png', '坚果', '2017-06-13 10:53:54', '218g*2');
INSERT INTO `goods` VALUES ('2', '夏威夷果', '奶油味', '36.90', 'img/img1.png', '坚果', '2017-06-13 10:57:57', '200g*3');
INSERT INTO `goods` VALUES ('3', '碧根果', '炒货美国山核桃', '28.90', 'img/img2.png', '坚果', '2017-06-13 10:53:54', '190g*2');
INSERT INTO `goods` VALUES ('5', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('6', '夏威夷果', '奶油味', '26.90', 'img/img5.png', '坚果', '2017-06-13 11:07:09', '200g*2');
INSERT INTO `goods` VALUES ('7', '东北红松子', '东北特产直采', '26.90', 'img/img7.png', '坚果', '2017-06-13 11:21:13', '200g*2');
INSERT INTO `goods` VALUES ('8', '夏威夷果', '奶油味', '36.90', 'img/img1.png', '坚果', '2017-06-13 10:57:57', '200g*3');
INSERT INTO `goods` VALUES ('9', '夏威夷果', '奶油味', '36.90', 'img/img1.png', '坚果', '2017-06-13 10:57:57', '200g*3');
INSERT INTO `goods` VALUES ('10', '夏威夷果', '奶油味', '36.90', 'img/img1.png', '坚果', '2017-06-13 10:57:57', '200g*3');
INSERT INTO `goods` VALUES ('11', '巴旦木   ', '特产干果奶香味', '25.90', 'img/img4.png', '坚果', '2017-06-13 11:03:26', '180g*2');
INSERT INTO `goods` VALUES ('12', '巴旦木   ', '特产干果奶香味', '25.90', 'img/img4.png', '坚果', '2017-06-13 11:03:26', '180g*2');
INSERT INTO `goods` VALUES ('13', '夏威夷果', '奶油味', '26.90', 'img/img5.png', '坚果', '2017-06-13 11:07:09', '200g*2');
INSERT INTO `goods` VALUES ('14', '夏威夷果', '奶油味', '26.90', 'img/img5.png', '坚果', '2017-06-13 11:07:09', '200g*2');
INSERT INTO `goods` VALUES ('15', '夏威夷果', '奶油味', '26.90', 'img/img5.png', '坚果', '2017-06-13 11:07:09', '200g*2');
INSERT INTO `goods` VALUES ('16', '夏威夷果', '奶油味', '26.90', 'img/img5.png', '坚果', '2017-06-13 11:07:09', '200g*2');
INSERT INTO `goods` VALUES ('17', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('18', '夏威夷果', '奶油味', '26.90', 'img/img5.png', '坚果', '2017-06-13 13:08:22', '200g*2');
INSERT INTO `goods` VALUES ('19', '夏威夷果', '奶油味', '26.90', 'img/img5.png', '坚果', '2017-06-13 13:08:26', '200g*2');
INSERT INTO `goods` VALUES ('20', '夏威夷果', '奶油味', '26.90', 'img/img5.png', '坚果', '2017-06-13 13:08:35', '200g*2');
INSERT INTO `goods` VALUES ('21', '夏威夷果', '奶油味', '36.90', 'img/img1.png', '坚果', '2017-06-13 10:57:57', '200g*3');
INSERT INTO `goods` VALUES ('22', '夏威夷果', '奶油味', '36.90', 'img/img1.png', '坚果', '2017-06-13 10:57:57', '200g*3');
INSERT INTO `goods` VALUES ('23', '夏威夷果', '奶油味', '36.90', 'img/img1.png', '坚果', '2017-06-13 10:57:57', '200g*3');
INSERT INTO `goods` VALUES ('24', '夏威夷果', '奶油味', '36.90', 'img/img1.png', '坚果', '2017-06-13 10:57:57', '200g*3');
INSERT INTO `goods` VALUES ('25', '夏威夷果', '奶油味', '36.90', 'img/img1.png', '坚果', '2017-06-13 10:57:57', '200g*3');
INSERT INTO `goods` VALUES ('26', '夏威夷果', '奶油味', '36.90', 'img/img1.png', '坚果', '2017-06-13 10:57:57', '200g*3');
INSERT INTO `goods` VALUES ('27', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('28', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('29', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('30', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('31', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('32', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('33', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('34', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('35', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('36', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('37', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('38', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('39', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('40', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('41', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('42', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('43', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('44', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('45', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('46', '东北松子', '东北特产', '36.90', 'img/img3.png', '坚果', '2017-06-13 11:05:15', '200g*2');
INSERT INTO `goods` VALUES ('48', '巴旦木   ', '特产干果奶香味', '25.90', 'img/img4.png', '坚果', '2017-06-13 11:03:26', '180g*2');
INSERT INTO `goods` VALUES ('49', '巴旦木   ', '特产干果奶香味', '25.90', 'img/img4.png', '坚果', '2017-06-13 11:03:26', '180g*2');
INSERT INTO `goods` VALUES ('47', '巴旦木   ', '特产干果奶香味', '25.90', 'img/img4.png', '坚果', '2017-06-13 11:03:26', '180g*2');
INSERT INTO `goods` VALUES ('50', '巴旦木   ', '特产干果奶香味', '25.90', 'img/img4.png', '坚果', '2017-06-13 11:03:26', '180g*2');
INSERT INTO `goods` VALUES ('51', '巴旦木   ', '特产干果奶香味', '25.90', 'img/img4.png', '坚果', '2017-06-13 11:03:26', '180g*2');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(20) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('00000000000000000001', '', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `user` VALUES ('00000000000000000002', 'qweqwe', '91c893d8f36d95ec7931bf0d3b4e3208');
INSERT INTO `user` VALUES ('00000000000000000003', 'ewq', 'af6d11b562fee1e9faeff29339ee72ee');
INSERT INTO `user` VALUES ('00000000000000000004', '', 'abf14ffd60451bc74be025d0adb77cae');
INSERT INTO `user` VALUES ('00000000000000000005', '', 'abf14ffd60451bc74be025d0adb77cae');
INSERT INTO `user` VALUES ('00000000000000000006', '', 'fd45ebc1e1d76bc1fe0ba933e60e9957');
INSERT INTO `user` VALUES ('00000000000000000007', '', '0db64300fedde58bb6ca4efbc7995f9e');
INSERT INTO `user` VALUES ('00000000000000000008', '', '06b2a4b6f82f4e2ef27f76e15d281113');
INSERT INTO `user` VALUES ('00000000000000000009', '123213213312', '7bab18383dcdca2a479e1658f810438d');
INSERT INTO `user` VALUES ('00000000000000000010', '12323', '2edd6b69c0a718a2024e1c711376604b');
INSERT INTO `user` VALUES ('00000000000000000011', '', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `user` VALUES ('00000000000000000012', '1234213423421321321', '2bbfa55dc58149cbdc795d293e8a5f7a');
