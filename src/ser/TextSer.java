package ser;

import impl.TextFunction;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.org.apache.xerces.internal.dom.TextImpl;

import pojo.TextBean;

public class TextSer extends HttpServlet {

	/**
	 * Constructor of the object.
	 */
	public TextSer() {
		super();
	}

	/**
	 * Destruction of the servlet. <br>
	 */
	public void destroy() {
		super.destroy(); // Just puts "destroy" string in log
		// Put your code here
	}

	/**
	 * The doGet method of the servlet. <br>
	 * 
	 * This method is called when a form has its tag value method equals to get.
	 * 
	 * @param request
	 *            the request send by the client to the server
	 * @param response
	 *            the response send by the server to the client
	 * @throws ServletException
	 *             if an error occurred
	 * @throws IOException
	 *             if an error occurred
	 */
	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		TextBean bean=new TextBean();
		TextFunction textfun=new TextFunction();
		request.setCharacterEncoding("UTF-8");
		String str=request.getParameter("parm");
		str=new String(str.getBytes("ISO-8859-1"),"UTF-8");
		bean.setWebName(str);
		System.out.println("WebName: "+bean.getWebName());
		ArrayList<TextBean> text=new ArrayList<TextBean>();
		text=textfun.querypage(bean.getWebName());
		System.out.println(text.get(0).getname()+text.get(0).gethead()+text.get(0).getbody()+text.get(0).getimg());
		request.setAttribute("text", text);
		request.getRequestDispatcher("/general.jsp").forward(request, response);
	}

	/**
	 * The doPost method of the servlet. <br>
	 * 
	 * This method is called when a form has its tag value method equals to
	 * post.
	 * 
	 * @param request
	 *            the request send by the client to the server
	 * @param response
	 *            the response send by the server to the client
	 * @throws ServletException
	 *             if an error occurred
	 * @throws IOException
	 *             if an error occurred
	 */
	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		TextBean text = new TextBean();
		text.setname(request.getParameter("pagename"));
		System.out.println(text.getname());
		System.out.println("servlet“—æ≠÷¥––");
	}

	/**
	 * Initialization of the servlet. <br>
	 * 
	 * @throws ServletException
	 *             if an error occurs
	 */
	public void init() throws ServletException {
		// Put your code here
	}

}
