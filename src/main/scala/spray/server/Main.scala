package spray.server

import akka.actor.{ActorSystem, Props}
import akka.io.IO
import spray.can.Http

object Main extends App with MySslConfiguration {

  implicit val system = ActorSystem()

  // the handler actor replies to incoming HttpRequests
  val handler = system.actorOf(Props[BibleTalkService], name = "handler")

  IO(Http) ! Http.Bind(handler, interface = "localhost", port = 8080)
}