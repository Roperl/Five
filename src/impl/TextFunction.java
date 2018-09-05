package impl;

import db.DBConn;
import pojo.TextBean;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class TextFunction {	
		public ArrayList<TextBean> querypage(String name){
			ArrayList<TextBean> texts=new ArrayList<TextBean>();
			Connection con = null;
			PreparedStatement pre = null;
			ResultSet rs=null;
			DBConn conns = new DBConn();
			con = conns.getConnection();
			try {
				pre=con.prepareStatement("Select head,body,img from text where name= ? ;");
				pre.setString(1,name);
				rs=pre.executeQuery();
				while(rs.next()){
					TextBean text=new TextBean();
					text.setname(name);
					text.sethead(rs.getString("head"));
					text.setbody(rs.getString("body"));
					text.setimg(rs.getString("img"));
					texts.add(text);
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}finally{
				try {
					con.close();
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			System.out.println("查询出来的数据？"+texts.toString());
			return texts;
		}

}
