package com.laozhu.otherjava;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class Graphic2DTest01 {

    public static void overImages() throws IOException {
        int width = 400;
        int height = 800;
        BufferedImage image = new BufferedImage(width, height, Transparency.TRANSLUCENT);
//        Transparency.TRANSLUCENT 这个类型是支持透明的一个类型

        Graphics2D g =  image.createGraphics();

        g.drawImage(ImageIO.read(new File("C:\\Users\\zhy\\Desktop\\imagesss\\lianpang.png")),0,200,null);

        g.drawImage(ImageIO.read(new File("C:\\Users\\zhy\\Desktop\\imagesss\\shenzi1.png")),0,200,null);
        g.drawImage(ImageIO.read(new File("C:\\Users\\zhy\\Desktop\\imagesss\\toufa1.png")),0,200,null);
        g.drawImage(ImageIO.read(new File("C:\\Users\\zhy\\Desktop\\imagesss\\yanjing.png")),0,200,null);
        g.drawImage(ImageIO.read(new File("C:\\Users\\zhy\\Desktop\\imagesss\\duoyun.png")),0,0,null);
        g.drawImage(ImageIO.read(new File("C:\\Users\\zhy\\Desktop\\imagesss\\zuiba1.png")),0,200,null);

        ImageIO.write(image,"png",new FileOutputStream("C:\\Users\\zhy\\Desktop\\yintian.png"));

    }

    public static void main(String[] args) throws IOException {
        overImages();
    }
}
